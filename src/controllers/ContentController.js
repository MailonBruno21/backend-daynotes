
const Annotations = require('../models/annotationData')


module.exports = {

    async update(request, response){
        const { id } = request.params
        const { notes } = request.body

        try{
            const annotation = await Annotations.findById({ _id : id})
            
            if(notes){
                annotation.notes = notes
                
                await annotation.save()
            }

            return response.json(annotation)

        }catch{
            return response.status(401).json({ error: "Não foi possivel alterar o conteudo" })
        }
    }
}