const Annotations = require('../models/annotationData')


module.exports = {

    async read(request, response) {
        const priority = request.query

        const priorityNotes = await Annotations.find(priority)

        return response.json(priorityNotes)
    },

    async update(request, response) {
        const { id } = request.params

        try {
            const annotation = await Annotations.findById({ _id: id })

            if (annotation.priority) {
                annotation.priority = false
            } else {
                annotation.priority = true
            }

            await annotation.save()

            return response.json(annotation)
        } catch {
            return response.status(401).json({ error: "Não foi poossivel alterar a prioridade" })
        }
    }
}