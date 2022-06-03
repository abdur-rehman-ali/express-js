

const allStudents = (req,res)=>{
    res.send(`All students!!!`)
}

const detailStudents = (req,res)=>{
    const id = req.params.id
    if(id==1){
        res.send('Number 1 is assigned to joiya')
    }else{
        res.send('All others')
    }
}

module.exports = {allStudents,detailStudents}