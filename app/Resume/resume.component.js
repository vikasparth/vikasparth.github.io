angular
    .module('resume')
    .component('resume', {
        templateUrl: '/app/Resume/resume.html',
        controller: function myResume() {
            this.myResume = "Application Development Manager & Contributor";
            this.summary = "More than 10 years of experience in all phases of the software development lifecycle"
        }
    });