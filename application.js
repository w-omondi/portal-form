const { db } = require('./dbconnection')
const applicationSubmitHandler = (req, res) => {
    const {
        email,
        fullname,
        salutation_title,
        position_applied,
        vacancy_no,
        national_id,
        date_of_birth,
        home_county,
        sub_county,
        ward,
        location,
        sub_location,
        phone,
        postal_address,
        postal_code,
        academic_professional_credentials,
        academic_certificates,
        academic_qualifications,
        certification,
        professional_membership,
        testimonials,
        experience,
        employed,
        current_employer,
        ethnicity,
        minority_group,
        plwd,
        chapter6_compliance,
        referees
    } = req.body;

    let query = `INSERT INTO applicants\
(email,\
fullname,\
salutation_title,\
position_applied,\
vacancy_no,\
national_id,\
date_of_birth,\
home_county,\
sub_county,\
ward,\
location,\
sub_location,\
phone,\
postal_address,\
postal_code,\
academic_professional_credentials,\
academic_certificates,\
academic_qualifications,\
certification,\
professional_membership,\
testimonials,\
experience,\
employed,\
current_employer,\
ethnicity,\
minority_group,\
plwd,\
chapter6_compliance,\
referees) VALUES('${email}','${fullname}',\
'${salutation_title} ',\
'${position_applied} ',\
'${vacancy_no} ',\
'${national_id} ',\
'${date_of_birth} ',\
'${home_county} ',\
'${sub_county} ',\
'${ward} ',\
'${location} ',\
'${sub_location} ',\
'${phone} ',\
'${postal_address} ',\
'${postal_code} ',\
'${academic_professional_credentials} ',\
'${academic_certificates} ',\
'${academic_qualifications} ',\
'${certification} ',\
'${professional_membership} ',\
'${testimonials} ',\
${experience},\
'${employed} ',\
'${current_employer} ',\
'${ethnicity} ',\
'${minority_group} ',\
'${plwd} ',\
'${chapter6_compliance} ',\
'${referees}');`
    console.log(req.body);
    //insert into the database
    db.query(query, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.end();
    })
}
const getAllApplications = (req, res) => {
    let query = `SELECT * FROM applicants;`;
    db.query(query, (err, result) => {
        res.json(result);
    })
}

module.exports = { applicationSubmitHandler, getAllApplications }