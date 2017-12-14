<template>
    <div>
        <div id="login">
            <h1>First, log in to spotify</h1>
            <a href="/spotifyLogin">Log in</a>
        </div>
        <div id="loggedin" type="text/x-handlebars-template">
            <h1>Logged in as {{display_name}}</h1>
            <!-- <img id="avatar" width="200" src="{{images.0.url}}" /> -->
            <ul>
                <li>Display name</li>
                <li>{{display_name}}</li>
                <li>Username</li>
                <li>{{id}}</li>
                <li>Email</li>
                <li>{{email}}</li>
                <li>Spotify URI</li>
                <li>
                    <a href="{{external_urls.spotify}}">{{external_urls.spotify}}</a>
                </li>
                <li>Link</li>
                <li>
                    <a href="{{href}}">{{href}}</a>
                </li>
                <li>Profile Image</li>
                <li>{{images.0.url}}</li>
            </ul>
            <p>
                <a href="/">Log in again</a>
            </p>
        </div>
    </div>
</template>

<script>

</script>

<style>
    #login {
        display: none;
    }

    #loggedin {
        display: none;
    }
</style>