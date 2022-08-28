using System.ComponentModel.DataAnnotations.Schema;
namespace TelecomAppBackend.Models
{
    public class Device
    {
        public int DeviceId { get; set; }
        public string DeviceName { get; set; }
        public string PhoneNumber { get; set; }
        [ForeignKey("Plan")]
        public int PlanID { get; set; }
        public virtual Plan? Plan { get; set; }
    }
}
