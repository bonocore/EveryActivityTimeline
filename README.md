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

  <h3 align="center">Timeline Activities for Salesforce leads</h3>

  <p align="center">
    An LWC component to display engagement activities (based on a custom object, not the standard SFDC activities) on a lead record page
    <br />
    <br />
    <a href="#Demo">View Demo</a>
    ·
    <a href="https://github.com/bonocore/LeadActivityTimelineDemo/issues">Report Bug</a>
    ·
    <a href="https://github.com/bonocore/LeadActivityTimelineDemo/issues">Request Feature</a>
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

A basic lightning web component useful for displaying engagement activities in a timeline ui.
Some notable points:
* It follows best practices of LDS: https://www.lightningdesignsystem.com/components/activity-timeline/
* For the sake of simplicity and flexibility it doesn't use standard SFDC activities. Instead, it use a custom object (GB_Timeline_Activity__c). See [Object folder](https://github.com/bonocore/LeadActivityTimelineDemo/tree/master/force-app/main/default/objects/GB_Timeline_Activity__c)
* It is currently bound to the Lead standard SFDC object. It could easily be extended for managing more objects (Standard and custom)
* It supports add, edit and delete of such objects

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [Lightning Web Components](https://lwc.dev/) <img src="https://webcomponents.dev/assets/lib/lwc.svg" width="24"/> 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This component is packaged as a Salesforce DX project. /force-app/main/default/lwc contains the logic (HTML and JS), while /force-app/main/default/objects/ contain the custom object definition. /force-app/main/default/permissionsets contains the permissions for the custom object and the relations to the standard Lead object.

https://github.com/bonocore/LeadActivityTimelineDemo/blob/master/images/timelineDemo.mp4?raw=true

### Installation

Since this component is a Salesforce DX project, if you have a local SFDX cli installation, you can simply download and install using [sfdx force:source:deploy](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_source.htm#cli_reference_force_source_deploy)

Otherwise, you can try to install it on a dev org using this (unofficial) tool:

<p align="center">
    <a href="https://githubsfdeploy.herokuapp.com?owner=bonocore&repo=LeadActivityTimelineDemo&ref=master">
            <img alt="Deploy to Salesforce"
                src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
    </a>
</p>    

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Once installed, you can simply click on the Edit Page for the Lead record page, and you will find "Lead activities timeline" component under the "Custom" section of the Components list. Drag and drop in your page and you are good to go. Please note that you can configure the component in order to show the "Add new activity" button or hide it. Once the component is in place, you can add new activities, edit or delete existing activities (arrow menu on the right of each activity), and expand / collapse each activity details (arrow button on the left of each activity).
Each activity can have an associated Icon, as per the [LDS Icons](https://www.lightningdesignsystem.com/icons/).
Supported icons are defined in /force-app/main/default/lwc/data/data.js . Edit it if you need more.

<a href="http://www.youtube.com/watch?feature=player_embedded&v=XnifV3ay9Tk" target="_blank">
 <img src="http://img.youtube.com/vi/XnifV3ay9Tk/sddefault.jpg" alt="Watch the video" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Demo

<a href="http://www.youtube.com/watch?feature=player_embedded&v=8AL4W2a9Exw" target="_blank">
 <img src="http://img.youtube.com/vi/8AL4W2a9Exw/sddefault.jpg" alt="Watch the video" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Add activity
- [x] Edit activities
- [x] Delete activity
- [ ] Add a "generate random activities" for demo purposes
- [ ] Support objects other than Lead

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

Project Link: [https://github.com/bonocore/LeadActivityTimelineDemo](https://github.com/bonocore/LeadActivityTimelineDemo)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/bonocore/LeadActivityTimelineDemo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/giuseppebonocore/
[product-screenshot]: images/screenshot.png