const Student = require('../models/student');
const Staff = require('../models/staff');

module.exports.loadPage = (req, res) => {
    return res.render('addstudent', {
        title: 'Student | Add Student'
    });
};

module.exports.createUser = (req, res) => {
    (async () => {
        try{
            const staff = await Staff.findById(req.user._id);
            if(staff){
                await Student.create(req.body).then((student) => {
                    student.teacher = staff._id;
                    student.save();
                    staff.students.push(student._id);
                    staff.save();
                });
            }
            return res.redirect('/staff/dashboard');
        }catch(err){
            console.log(`Error: ${err.message}`);
        }
    })();
};

module.exports.deleteUser = (req, res) => {
    (async () => {
        try{
            console.log(req.query);
            const student = await Student.findById(req.query.studentId);
            if(student){
                const staff = await Staff.findById(req.query.staffId);
                if(staff){
                    staff.students = staff.students.filter((id) => {
                        return id != req.query.studentId;
                    });

                    staff.save();
                    await Student.deleteOne({_id: req.query.studentId});
                }
            }
            return res.redirect('/staff/dashboard');
        }catch(err){
            console.log(`Error: ${err.message}`);
        }
    })();
} 

module.exports.markPresent = (req, res) => {
    (async () => {
        try{
            const student = await Student.findById(req.query.id);
            // console.log(student);
            student.daysattended = Number(student.daysattended) + 1;
            student.save();
            return res.redirect('/staff/dashboard');
        }catch(err){
            console.log(`Error: ${err.message}`);
        }
    })();
}