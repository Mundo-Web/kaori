@php
  $component = Route::currentRouteName();
@endphp


<!DOCTYPE html>
<html lang="es">

<head>
  @viteReactRefresh
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{ env('APP_NAME', 'Kaori') }}</title>
  <link rel="shortcut icon" href="/assets/img/icon.svg" type="image/svg+xml">

  <link href="/lte/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
  <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

  <style>
    * {
      font-family: Poppins;
      box-sizing: border-box;
    }
  </style>

  @vite(['resources/css/app.css', 'resources/js/' . Route::currentRouteName()])
  @inertiaHead

  @if ($component == 'BlogArticle.jsx')
    <link href="/lte/assets/libs/quill/quill.snow.css" rel="stylesheet" type="text/css" />
    <link href="/lte/assets/libs/quill/quill.bubble.css" rel="stylesheet" type="text/css" />
    <style>
      .ql-editor blockquote {
        border-left: 4px solid #f8b62c;
        padding-left: 16px;
      }

      .ql-editor * {
        color: #475569;
      }

      .ql-editor img {
        border-radius: 8px;
      }
    </style>
  @endif

  <script>function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"3517b44141a34815f5c1ebb765608760"})});</script>
</head>

<body>
  @inertia

  <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script>
  <script src="/lte/assets/libs/moment/min/moment.min.js"></script>
  <script src="/lte/assets/libs/moment/moment-timezone.js"></script>
  <script src="/lte/assets/libs/moment/locale/es.js"></script>
  <script src="/lte/assets/libs/quill/quill.min.js"></script>
</body>

</html>
