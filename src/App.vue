<template>
  <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
            <div class="container px-5">
                <a class="navbar-brand fw-bold" href="/home">STOODY</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="bi-list"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        <li class="nav-item"><a class="nav-link me-lg-3" href="/groups">Search Groups</a></li>
                        <li class="nav-item"><a class="nav-link me-lg-3" href="/myGroups">My Groups</a></li>
                        <li class="nav-item"><a class="nav-link me-lg-3" href="/signup">Sign Up</a></li>
                        <li class="nav-item"><a class="nav-link me-lg-3" href="/login">Sign In</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    <router-view/>
    <footer class="bg-black text-center py-5">
            <div class="container px-5">
                <div class="text-white-50 small">
                    <div class="mb-2">&copy; Stoody 2021. All Rights Reserved.</div>
                    <span class="mx-1"></span>
                    <a href="/about">About</a>
                    <span class="mx-1">&middot;</span>
                    <a href="/logout">Sign Out</a>
                </div>
            </div>
        </footer>
  </div>
</template>

<style>
</style>
