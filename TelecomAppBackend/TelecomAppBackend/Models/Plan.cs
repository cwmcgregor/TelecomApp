using System.ComponentModel.DataAnnotations.Schema;

namespace TelecomAppBackend.Models
{
    public class Plan
    {
        public int PlanId { get; set; }
        public string PlanName { get; set; }
        public int DeviceLimit { get; set; }
        public decimal Price { get; set; }
     
        //[ForeignKey("User")]
        //public int UserId { get; set; }
        //public virtual User? User { get; set; }
        public ICollection<Device>?Devices { get; set; }
    }
}
