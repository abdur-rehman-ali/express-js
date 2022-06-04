const allStudents = (req,res)=>{
    res.send('All students controller')
}

const studentDetail =  (req,res)=>{
    res.send('Students detail controller')
}

module.exports = {allStudents,studentDetail}