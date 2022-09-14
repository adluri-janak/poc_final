const mongoose = require('mongoose');


const dataSchema = new mongoose.Schema({
    personalDetails:{
        first_name:{
            type:String,
            required:true
        },
        last_name:{
            type:String,
            required:true
        },
        gender: {
            type: String,
            required: true
        },
        base_location:{
            type: String,
            required: true
        },
        cg_email:{
            type: String,
            required: true
        },
        phone_number:{
            type: String,
            required: true
        },
        alternate_phone_number:{
            type: String,
            required: true
        },
        address:{
            type: String,
            required: true
        }
    },
    employerDetails:{
        reporting_manager:{
            type: String,
            required: true
        },
        technical_lead:{
            type: String,
            required: true
        },
        resource_status:{
            type: String,
            required: true
        },
        employee_id:{
            type: String,
            required: true
        },
        global_id:{
            type: String,
            required: true
        },        
        sso_id:{
            type: String,
            required: true
        },
        axa_email:{
            type: String,
            required: true
        },
        cg_start_date:{
            type: String,
            required: true
        },
        axa_start_date:{
            type: String,
            required: true
        },
        axa_billing_date:{
            type: String,
            required: true
        },
        axa_contract_renewal:{
            type: String,
            required: true
        },
        plan_view_setup:{
            type: String,
            required: true
        },
        current_squad:{
            type: String,
            required: true
        },
        user_id:{
            type: String,
            required: true
        },
        project_code:{
            type: String,
            required: true
        },
        remote_desktop:{
            type: String,
            required: true
        },
        onboarding_ticket:{
            type: String,
            required: true
        },
        offboarding_ticket:{
            type: String,
            required: true
        },
        release_date:{
            type: String,
            required: true
        },
        resigned:{
            type: String,
            required: true
        }
    },
    skills:{
        skill:{
            type: String,
            required: true
        },
        technology:{
            type: String,
            required: true
        },
        bu:{
            type: String,
            required: true
        },
        grade:{
            type: String,
            required: true
        },
        pyramid:{
            type: String,
            required: true
        },
        anchor_location:{
            type: String,
            required: true
        },
        resource_type:{
            type: String,
            required: true
        }
    },
    comments:{
        type: String,
        required: true
    }
})

const dataModel = mongoose.model('employee', dataSchema);

module.exports = dataModel;