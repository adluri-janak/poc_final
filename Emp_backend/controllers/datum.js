const dataModel = require('../models/data');

const getDetails = async(req, res) =>{
    try{
        let details = await dataModel.find({}).sort({createdAt: "desc"});;

        if(details){
            res.json(details)
        }
    }catch(err){
        console.log(err)
    }   
}

const getDetail = async(req, res) =>{
    try{
        let details = await dataModel.findById(req.params.id);

        if(details){
            res.json(details)
        }
    }catch(err){
        console.log(err)
    }   
}

//"employerDetails.employee_id":"req.body.employee_id"
//$match: {'employerDetails.employee_id': req.body}
//db.user.find({"folder":"cats","files.filename":"blueCat.jpg"})
//db.articles.aggregate([ { $match : { author : "dave" } } ]);
const getFilterdDetails = async (req,res)=>{
    
    try{
        const regex = new RegExp(req.params.first_name,'i')
        //let details = await dataModel.find({"personalDetails.first_name":regex});
        let details = await dataModel.aggregate([ { $match: {"personalDetails.first_name": regex} } ]);
        //console.log("details",details)

        if(details){
            res.json(details)
        }
    }
    catch(err){
        console.log(err)
    }
}

const createDetail = async(req, res) => {
    try{
        const detail = new dataModel({
            personalDetails:{
                first_name: req.body.personalDetails.first_name,
                last_name: req.body.personalDetails.last_name,
                gender: req.body.personalDetails.gender,
                base_location: req.body.personalDetails.base_location,
                cg_email: req.body.personalDetails.cg_email,
                phone_number: req.body.personalDetails.phone_number,
                alternate_phone_number: req.body.personalDetails.alternate_phone_number,
                address: req.body.personalDetails.address
            },
            employerDetails:{
                reporting_manager: req.body.employerDetails.reporting_manager,
                technical_lead: req.body.employerDetails.technical_lead,
                resource_status: req.body.employerDetails.resource_status,
                employee_id: req.body.employerDetails.employee_id,
                global_id: req.body.employerDetails.global_id,           
                sso_id: req.body.employerDetails.sso_id,
                axa_email: req.body.employerDetails.axa_email,
                cg_start_date: req.body.employerDetails.cg_start_date,
                axa_start_date: req.body.employerDetails.axa_start_date,
                axa_billing_date: req.body.employerDetails.axa_billing_date,
                axa_contract_renewal: req.body.employerDetails.axa_contract_renewal,
                plan_view_setup: req.body.employerDetails.plan_view_setup,
                current_squad: req.body.employerDetails.current_squad,
                user_id: req.body.employerDetails.user_id,
                project_code: req.body.employerDetails.project_code,
                remote_desktop: req.body.employerDetails.remote_desktop,
                onboarding_ticket: req.body.employerDetails.onboarding_ticket,
                offboarding_ticket: req.body.employerDetails.offboarding_ticket,
                release_date: req.body.employerDetails.release_date,
                resigned: req.body.employerDetails.resigned
            },
            skills:{
                skill: req.body.skills.skill,
                technology: req.body.skills.technology,
                bu: req.body.skills.bu,
                grade: req.body.skills.grade,
                pyramid: req.body.skills.pyramid,
                anchor_location: req.body.skills.anchor_location,
                resource_type: req.body.skills.resource_type,
            },           
            comments: req.body.comments   
        })

        const createData = await detail.save();

        if(createData){
            res.send(createData)
        }
    } catch(err){
        console.log(err)
    }
}

const updateDetail = async (req, res) =>{
    try{
        let detail = await dataModel.findByIdAndUpdate(req.params.id, req.body)

        if(detail){
            res.send("Updated Successfully")
        }
    } catch(err){
        console.log(err)
    }
}

const deleteDetail = async(req, res) => {
    try{
        let detail = await dataModel.findByIdAndDelete(req.params.id)
        if(detail) {
            res.send("Item deleted Successfully")
        }
    } catch(e) {
        console.log(e)
    }
}

module.exports = {getDetails, getDetail, createDetail, updateDetail, deleteDetail, getFilterdDetails}