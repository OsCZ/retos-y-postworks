const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

const sequelize = require('../database')

//data de mentirita
// const notes=[{
//     id:1,
//     title: 'dummy note',
//     content: 'this is dumy note'
//    }]


   //manejo de notas
   router.get('/',async(req,res)=>{
    const Notes = await sequelize.models.Notes.findAll
    return res.json(Notes)
   })


   //manejo de notas nuevas
   router.post('/',async (req,res)=>{

    const {body} = req
    const Note = await sequelize.model.Notes.create(
        {
            heading:body.heading,
            content: body.content
        })

        Note.save()

        return res.json({message:'Creado OK',data : Note })
})


//update de notas expecificas
router.put( '/:id' ,async(req,res)=>{
  const {body,params:{id}} = req
  const Note = await sequelize.models.Notes.findOne({id})

  if(!note)
    {
    return restart.status(404).json({message: 'not found'})
   }
  
   const UpdateNote = await Note.update({
        heading:body.heading,
        content: body.content,
    })

    return res.json({message:'Update OK',data : UpdateNote })
})




// Handler for delete a specific note
router.delete('/:id', async  (req, res) => {
    // Getting id from parameters
    const { params: { id } } = req; 
    // Finding specific noted based on id
    const Note = await sequelize.models.Notes.findOne({ id })
    if (!Note) {
      return res.status(404).json({ message: 'Note not found'});
    }
  // Destroying resource
   await Note.destroy();
   return res.json({ message: 'Deleted successfully' });
  
  })



module.exports = router;