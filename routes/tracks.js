const express = require("express");
const authMiddleware = require("../middleware/session");
const roleMiddleware = require("../middleware/rol");

const {getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/tracks");
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks");
// const customHeader = require("../middleware/customHeader");

const router = express.Router();
//TODO: http://loclahost/tracks GET, POST, PUT, DELETE
/**
 * //TODO localhost:3000/api/auth/register
 * Register new user
 * @openapi
 * /tracks:
 *    get:
 *        tags:
 *            - tracks
 *        summary: "List all tracks"
 *        description: "This path is to register new user"
 *        requestBody:
 *            content:
 *                application/json:
 *                    schema:
 *                        $ref: "#/components/schemas/track"
 *        responses:
 *            '201':
 *                description: "Registration Ok"
 *            '403':
 *                description: "error user validation"
 */
router.get("/",authMiddleware,  getItems);

/**
 * Get track
 * @openapi
 * /tracks/{id}:
 *    get:
 *      tags:
 *        - tracks
 *      summary: "Detalle cancion"
 *      description: Obten el detalle de una cancion
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID de canción a retornar
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objecto de la cancion.
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/track'
 *        '422':
 *          description: Error de validacion.
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Register new track
 * @openapi
 * /tracks:
 *    post:
 *      tags:
 *        - tracks
 *      summary: "Register track"
 *      description: Registra una cancion y obtener el detalle del registro
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/track"
 *    responses:
 *      '201':
 *        description: Retorna el objeto insertado en la coleccion con stado '201'
 *      '403':
 *        description: No tiene permisos '403'
 */
router.post("/", authMiddleware, roleMiddleware(['admin']), validatorCreateItem, createItem);

/**
 * Update track
 * @openapi
 * /tracks/{id}:
 *    put:
 *      tags:
 *        - tracks
 *      summary: "Update track"
 *      description: Actualiza una cancion y obtener el detalle del registro
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID de canción a retornar
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objeto actualizado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/track"
 *    responses:
 *      '201':
 *        description: Retorna el objeto insertado en la coleccion con stado '201'
 *        content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/track'
 *      '403':
 *        description: No tiene permisos '403'
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

/**
 * Delete track
 * @openapi
 * /tracks/{id}:
 *    delete:
 *      tags:
 *        - tracks
 *      summary: "Eliminar cancion"
 *      description: Elimiar el detalle de una cancion
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID de canción a retornar
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objecto de la cancion.
 *        '422':
 *          description: Error de validacion.
 */
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;