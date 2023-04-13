import DashboardLayout from "../../../layouts/dashboard"
import ManiForm from "../components/addform"

function ViewManifInfo() {
  
    return ( 
      <DashboardLayout>
        
        <div class="h-screen px-4 pb-24 overflow-auto md:px-6">
            
            <ManiForm/>
            
        </div>

      </DashboardLayout>
    )
  }
  
  export default ViewManifInfo