'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-61c2ece98227de98a36417bc66377f50bb44d36f828cac5bbc3f58bbd54f6cd0ae4df48ac7f064da4fce82ef58fa3c342b2d58cd8b6ffd512855a68791b4b4c0"' : 'data-bs-target="#xs-components-links-module-AppModule-61c2ece98227de98a36417bc66377f50bb44d36f828cac5bbc3f58bbd54f6cd0ae4df48ac7f064da4fce82ef58fa3c342b2d58cd8b6ffd512855a68791b4b4c0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-61c2ece98227de98a36417bc66377f50bb44d36f828cac5bbc3f58bbd54f6cd0ae4df48ac7f064da4fce82ef58fa3c342b2d58cd8b6ffd512855a68791b4b4c0"' :
                                            'id="xs-components-links-module-AppModule-61c2ece98227de98a36417bc66377f50bb44d36f828cac5bbc3f58bbd54f6cd0ae4df48ac7f064da4fce82ef58fa3c342b2d58cd8b6ffd512855a68791b4b4c0"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthModule-ce37cb1f844163e3697f2f6247de4fb1aa89a211f37342eda4321b6e01531bdd10abed3b926f2eef3c011de9f60e15135e2a15015dfbd87d83cd5356612ad654"' : 'data-bs-target="#xs-components-links-module-AuthModule-ce37cb1f844163e3697f2f6247de4fb1aa89a211f37342eda4321b6e01531bdd10abed3b926f2eef3c011de9f60e15135e2a15015dfbd87d83cd5356612ad654"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-ce37cb1f844163e3697f2f6247de4fb1aa89a211f37342eda4321b6e01531bdd10abed3b926f2eef3c011de9f60e15135e2a15015dfbd87d83cd5356612ad654"' :
                                            'id="xs-components-links-module-AuthModule-ce37cb1f844163e3697f2f6247de4fb1aa89a211f37342eda4321b6e01531bdd10abed3b926f2eef3c011de9f60e15135e2a15015dfbd87d83cd5356612ad654"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecoveryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecoveryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-5512a382dcd278825c9fab2106b1065652c3b30f7a2f0b83d25ee69e321641e840395212450da9a63cbd9d7255d34916c0c6d9469d8a2f61cc692fad5466d4b9"' : 'data-bs-target="#xs-components-links-module-SharedModule-5512a382dcd278825c9fab2106b1065652c3b30f7a2f0b83d25ee69e321641e840395212450da9a63cbd9d7255d34916c0c6d9469d8a2f61cc692fad5466d4b9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-5512a382dcd278825c9fab2106b1065652c3b30f7a2f0b83d25ee69e321641e840395212450da9a63cbd9d7255d34916c0c6d9469d8a2f61cc692fad5466d4b9"' :
                                            'id="xs-components-links-module-SharedModule-5512a382dcd278825c9fab2106b1065652c3b30f7a2f0b83d25ee69e321641e840395212450da9a63cbd9d7255d34916c0c6d9469d8a2f61cc692fad5466d4b9"' }>
                                            <li class="link">
                                                <a href="components/ButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});