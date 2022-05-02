import { model, Schema} from 'mongoose'

const pedidoModel = new Schema(
    {id:{
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        },
        url_pod: {
            type: String,
            required: true
        },
        precio_final: {
            type: Number,
            required: true
        },
        email_dest: {
            type: String,
            required: true
        }
    }
)


pedidoModel.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject._v
    }
})

const Pedido = model("Pedido", pedidoModel);
export default Pedido;