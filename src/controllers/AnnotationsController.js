const Annotations = require('../models/annotationData')

module.exports = {

    async read(request, response) {
        const annotationsList = await Annotations.find()

        return response.json(annotationsList)
    },

    async create(request, response) {
        const { title, notes, priority } = request.body

        if (!notes || !title) {
            return response.status(400).json({ error: "Título / Anotação é obrigatório" })
        }

        const annotationCreated = await Annotations.create({
            title,
            notes,
            priority
        })

        return response.json(annotationCreated)

    },


    async delete(request, response) {
        const { id } = request.params;
        
        try{
            const annotationDeleted = await Annotations.findByIdAndDelete({ _id : id })
            return response.json(annotationDeleted);
        }catch{
            return response.status(401).json({ error: "Não foi encontrado o registro para deletar" })
        }
       

        // return response.status(401).json({ error: "Não foi encontrado o registro para deletar" })

    }



}