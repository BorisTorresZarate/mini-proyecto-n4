import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { findUserByEmail, updateUserProfile, createUser } from '../model/usuario.model.js';
import { SECRET_KEY } from '../config/config.js';

export const register = async (req, res) => {
    const { email, password } = req.body;
    
    if (password.length < 8 || !/[A-Z]/.test(password)) {
        return res.status(400).json({ message: 'La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula.' });
    }

    try {
        const user = await findUserByEmail(email);
        if (user) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        const hash = await bcrypt.hash(password, 10);
        await createUser(email, hash);

        res.status(201).json({ message: 'Usuario creado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await findUserByEmail(email);
        if (!user) return res.status(400).json({ message: 'Usuario no encontrado' });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(400).json({ message: 'contraseña invalida' });

        const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: '1h' });

        res.status(200).json({ message: 'Usuario verificado', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const dashboard = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, SECRET_KEY);
        const email = decodedToken.email;

        const user = await findUserByEmail(email);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, SECRET_KEY);
        const email = decodedToken.email;
        const { name, phone, bio } = req.body;
        const profileImage = req.file ? `/uploads/${req.file.filename}` : req.body.profileImage;
        await updateUserProfile(email, {profileImage, name, phone, bio});
        res.status(200).json({ message: 'Perfil actualizado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
