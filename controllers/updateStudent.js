const updateStudent = async (req, res) => {
    const db = require('../config/db');

    try {
        const { st_name, st_roll, st_marks, st_address } = req.body;
        const { st_id } = req.params;

        if (!st_name || !st_roll || !st_marks || !st_address) {
            return res.status(400).send({
                success: false,
                message: 'Missing student data'
            });
        }

        const [data] = await db.query(
            `UPDATE student SET st_name=?, st_roll=?, st_marks=?, st_address=? WHERE st_id=?`,
            [st_name, st_roll, st_marks, st_address, st_id]
        );

        if (!data) {
            return res.status(404).send({
                success: false,
                message: 'Student not found'
            });
        }

        return res.status(200).send({
            success: true,
            message: 'Student updated successfully'
        });

    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: 'Server error',
            error
        });
    }
};

module.exports = { updateStudent };
