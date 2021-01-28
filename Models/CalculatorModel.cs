using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace FirstASP.NET.Models
{
    public class CalculatorModel
    {
        [Range(0, 100, ErrorMessage ="Assignment percentage must be between 0 and 100")]
        public double assignmentinput { get; set; }
        [Range(0, 100, ErrorMessage = "Group percentage must be between 0 and 100")]

        public double groupinput { get; set; }
        [Range(0, 100, ErrorMessage = "Quiz percentage must be between 0 and 100")]

        public double quizinput { get; set; }
        [Range(0, 100, ErrorMessage = "Exam percentage must be between 0 and 100")]

        public double examinput { get; set; }
        [Range(0, 100, ErrorMessage = "Intex percentage must be between 0 and 100")]

        public double intexinput { get; set; }

    }
}
