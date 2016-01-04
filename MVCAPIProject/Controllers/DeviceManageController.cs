using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.SqlClient;
using System.Data;
using System.Threading.Tasks;

namespace MVCAPIProject.Controllers
{
    public class DeviceManageController : ApiController
    {
        // GET api/devicemanage
        public List<MVCAPIProject.Models.PlanetBooking> Get()
        {
            List<MVCAPIProject.Models.PlanetBooking> apj = new List<MVCAPIProject.Models.PlanetBooking>();
            DataAccessLayer.HardwareManagement cv = new DataAccessLayer.HardwareManagement();
            DataSet ds = cv.GetDetails();
            foreach (DataRow item in ds.Tables[0].Rows)
            {
                MVCAPIProject.Models.PlanetBooking obj = new Models.PlanetBooking()
                {
                    EID = int.Parse(item["E-ID"].ToString()),
                    PlanetID = int.Parse(item["PlanetID"].ToString()),
                    HumanName = item["HumanName"].ToString(),
                    Gender = item["Gender"].ToString(),
                    FamilySize = int.Parse(item["FamilySize"].ToString())
                };
                apj.Add(obj);
            }
            return apj;
        }

        // GET api/devicemanage/5
        public List<MVCAPIProject.Models.PlanetBooking> Get(int id)
        {
            List<MVCAPIProject.Models.PlanetBooking> apj = new List<MVCAPIProject.Models.PlanetBooking>();
            DataAccessLayer.HardwareManagement cv = new DataAccessLayer.HardwareManagement();
            DataSet ds = cv.GetDetails();
            foreach (DataRow item in ds.Tables[0].Rows)
            {
                MVCAPIProject.Models.PlanetBooking obj = new Models.PlanetBooking()
                {
                    PlanetID = int.Parse(item["PlanetID"].ToString()),
                    HumanName = item["HumanName"].ToString(),
                    EID = int.Parse(item["E-ID"].ToString()),
                    Gender = item["Gender"].ToString(),
                    FamilySize = int.Parse(item["FamilySize"].ToString())

                };
                apj.Add(obj);
            }
            return apj;
            
        }

        // POST api/devicemanage
        public async Task<int> Post([FromBody]Models.PlanetBooking book)
        {
            DataAccessLayer.HardwareManagement tb = new DataAccessLayer.HardwareManagement();
            return await tb.InsertToTemp(book);
        }

        // PUT api/devicemanage/5
        public async Task<int> Put([FromBody]Models.PlanetBooking deb)
        {
            DataAccessLayer.HardwareManagement tb = new DataAccessLayer.HardwareManagement();
            int id = deb.EID;
            return await tb.UpdateToTemp(id,deb);
        }

        // DELETE api/devicemanage/5
        public async Task<IHttpActionResult> Delete(int id)
        {
            DataAccessLayer.HardwareManagement tb = new DataAccessLayer.HardwareManagement();
            int res = await tb.DeleteRec(id);
            if (res > 0)
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }

        }
    }
}
