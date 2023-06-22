const pool = require("./database");

exports.getUser = async (req, res) => {

try {
    let query=`SELECT * FROM CLIENTE`;
    await pool.conexion.query(query, async (err, result) => {

        if (result.length != 0) {
            res.status(200).json({
                'success': true,
                'tipo':2,
                'message': result[0]
            });
        } else {
            res.status(400).json({
                'success': false,
                'message': "El no usuario existe"
            });
        }

    });
} catch (error) {
    res.status(400).json({ 'success': false, 'message': 'Existe un error inesperado ' + error })
}

}
