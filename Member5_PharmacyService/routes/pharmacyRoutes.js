const express = require('express');
const router = express.Router();
const Medicine = require('../models/Medicine');

/**
 * @swagger
 * /medicines:
 *   get:
 *     summary: Retrieve a list of all medicines in inventory
 *     responses:
 *       200:
 *         description: A list of medicines
 */
router.get('/medicines', async (req, res) => {
    try {
        const meds = await Medicine.find();
        res.status(200).json({ success: true, count: meds.length, data: meds });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});

/**
 * @swagger
 * /medicines/{id}:
 *   get:
 *     summary: Retrieve a single medicine by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single medicine object
 */
router.get('/medicines/:id', async (req, res) => {
    try {
        const med = await Medicine.findById(req.params.id);
        if (!med) return res.status(404).json({ success: false, error: 'Medicine not found' });
        res.status(200).json({ success: true, data: med });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});

/**
 * @swagger
 * /medicines:
 *   post:
 *     summary: Add a new medicine to pharmacy
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               medicineName:
 *                 type: string
 *               stockQuantity:
 *                 type: number
 *               pricePerUnit:
 *                 type: number
 *               supplier:
 *                 type: string
 *     responses:
 *       201:
 *         description: Medicine added successfully
 */
router.post('/medicines', async (req, res) => {
    try {
        const med = await Medicine.create(req.body);
        res.status(201).json({ success: true, data: med });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

/**
 * @swagger
 * /medicines/{id}:
 *   put:
 *     summary: Update an existing medicine record
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Medicine updated completely
 */
router.put('/medicines/:id', async (req, res) => {
    try {
        const med = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!med) return res.status(404).json({ success: false, error: 'Medicine not found' });
        res.status(200).json({ success: true, data: med });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

/**
 * @swagger
 * /medicines/{id}:
 *   delete:
 *     summary: Delete a medicine record
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Medicine deleted
 */
router.delete('/medicines/:id', async (req, res) => {
    try {
        const med = await Medicine.findByIdAndDelete(req.params.id);
        if (!med) return res.status(404).json({ success: false, error: 'Medicine not found' });
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

module.exports = router;
