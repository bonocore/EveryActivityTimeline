<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!--<a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>-->

  <h3 align="center">Timeline Activities for Salesforce objects</h3>

  <p align="center">
    An LWC component to display engagement activities (based on a custom object, not the standard SFDC activities) on a object record page (es. Leads, Accounts...)
    <br />
    <br />
    <a href="#Demo">View Demo</a>
    ·
    <a href="https://github.com/bonocore/EveryActivityTimeline/issues">Report Bug</a>
    ·
    <a href="https://github.com/bonocore/EveryActivityTimeline/issues">Request Feature</a>
   </p>
</div>

<!-- TABLE OF CONTENTS -->
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](product-screenshot)

A basic lightning web component useful for displaying engagement activities (e.g. "Lead visited the website", "Account signed the contract") in a timeline ui.
Some notable points:
* It follows best practices of LDS: https://www.lightningdesignsystem.com/components/activity-timeline/
* For the sake of simplicity and flexibility it doesn't use standard SFDC activities. Instead, it use a custom object (GB_Timeline_Activity__c). See [Object folder](https://github.com/bonocore/EveryActivityTimeline/tree/master/force-app/main/default/objects/GB_Timeline_Activity__c)
* The activities created can be bound to every SF object (Standard and custom). Notable examples: Leads, Accounts, Contacts...
* It supports add, edit and delete of such activities
* It open interesting use cases. You may easily create flows that create such activities on other events (e.g. when a sales is completed, when a case is escalated...), in order to easily visualized in a timeline in the target object record page (e.g. the account or contact involved)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With


* [Lightning Web Components](https://lwc.dev/) <img src="https://webcomponents.dev/assets/lib/lwc.svg" width="24"/> 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This component is packaged as a Salesforce DX project. /force-app/main/default/lwc contains the logic (HTML and JS), while /force-app/main/default/objects/ contain the custom object definition. /force-app/main/default/permissionsets contains the permissions for the activity custom object  (GB_Timeline_Activity__c).


### Installation

Since this component is a Salesforce DX project, if you have a local SFDX cli installation, you can simply download and install using [sfdx force:source:deploy](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_source.htm#cli_reference_force_source_deploy)

Otherwise, you can try to install it on a dev org using this (unofficial) tool:

<p align="center">
    <a href="https://githubsfdeploy.herokuapp.com?owner=bonocore&repo=EveryActivityTimeline&ref=master">
            <img alt="Deploy to Salesforce"
                src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
    </a>
</p>    

**NB: This component contains both the Admin profile and permission set for granting the visibility on the custom object and its fields. However, depending on your installation method, you may need to manually assign the permissions. If you have any strange visibility issue (e.g. when clicking on "Add new activity" you don't see all the fields), simply assign the "GB Timeline Activity Permset" permission set to your user, from the SF setup menu**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Once installed, you can simply click on the Edit Page for the record page of choice (e.g. Lead, Account, Contact...), and you will find "Every activity timeline" component under the "Custom" section of the Components list. Drag and drop in your page and you are good to go. You can add the component in communities pages too. Please note that you can configure the component in order to show the "Add new activity" button or hide it. Once the component is in place, you can add new activities, edit or delete existing activities (arrow menu on the right of each activity), and expand / collapse each activity details (arrow button on the left of each activity).
Each activity can have an associated Icon, as per the [LDS Icons](https://www.lightningdesignsystem.com/icons/).
Supported icons are defined in /force-app/main/default/lwc/data/data.js . Edit it if you need more.




https://user-images.githubusercontent.com/10563607/186936444-fe19cb61-eb2c-40f7-9803-bae2fabfbb99.mp4



<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Demo



https://user-images.githubusercontent.com/10563607/186936974-24f1f7a3-77e7-4afc-9177-d3151c79b86a.mp4



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Add activity
- [x] Edit activities
- [x] Delete activity
- [ ] Add a "generate random activities" for demo purposes

<p align="right">(<a href="#readme-top">back to top</a>)</p>

  
<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Giuseppe Bonocore - [![LinkedIn][linkedin-shield]][linkedin-url] [@gbonocore](https://twitter.com/gbonocore) - giuseppe.bonocore@gmail.com

Project Link: [https://github.com/bonocore/EveryActivityTimeline](https://github.com/bonocore/EveryActivityTimeline)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/bonocore/EveryActivityTimeline/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/giuseppebonocore/
[product-screenshot]: images/screenshot.png
