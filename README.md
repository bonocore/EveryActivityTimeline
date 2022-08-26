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
    <a href="#">View Demo</a>
    ·
    <a href="https://github.com/bonocore/LeadActivityTimelineDemo/issues">Report Bug</a>
    ·
    <a href="https://github.com/bonocore/LeadActivityTimelineDemo/issues">Request Feature</a>
    ·
    <a href="https://githubsfdeploy.herokuapp.com?owner=bonocore&repo=LeadActivityTimelineDemo&ref=master">
        <img alt="Deploy to Salesforce"
            src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
     </a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
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
</details>

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

* [Lightning Web Components](https://lwc.dev/) ![LWC](https://webcomponents.dev/assets/lib/lwc.svg | width=100)
<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/bonocore/LeadActivityTimelineDemo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/giuseppebonocore/
[product-screenshot]: images/screenshot.png