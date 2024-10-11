<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="shortcut icon" href="{{ asset('img/favicon.png') }}" type="image/x-icon">
    <link rel="icon" type="image/svg+xml" href="{{ asset('img/favicon.png') }}" />
    <meta name="description" content="Website Membership Saloka Theme Park" />
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
    <style>
        body {
            background-color: white
        }
    </style>
</head>

<body>

    @inertia

</body>

</html>
