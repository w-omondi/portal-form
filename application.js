const moment = require('moment')

const { db } = require('./dbconnection')
const applicationSubmitHandler = (req, res) => {
    const now = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
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
        disability_nature_APDK,
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
disability_nature_APDK,\
chapter6_compliance,\
referees,\
timestamp) VALUES('${email}','${fullname}',\
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
'${disability_nature_APDK}',\
'${chapter6_compliance} ',\
'${referees}',
'${now}');`
    console.log(req.body);
    //insert into the database
    console.info(now);
    db.query(query, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.end();
    })
}
const getAllApplications = (req, res) => {
    let query = `SELECT * FROM applicants order by timestamp desc;`;
    db.query(query, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
}

const getCustomApplications = (req, res) => {
    const { date, limit } = req.params;
    let query = `SELECT * FROM applicants where timestamp >= '${date}' order by timestamp desc limit ${limit};`;
    db.query(query, (err, result) => {
        if (err) throw err;
        console.log(result)
        res.json(result);
    })

}

module.exports = { applicationSubmitHandler, getAllApplications, getCustomApplications }

