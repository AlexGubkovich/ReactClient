Это адаптивное single page application(SPA), которое показывает в приятном виде расписание пар для студентов колледжа.
Данные берутся из REST API.

Стек технологий: React JS, Material UI.

![Image alt](https://github.com/Alex/Photos/raw/main/TimetablePhotos.html)

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .flex {
            position: relative;
            width: auto;
            height: auto;
            /* border: 2px solid #000; */
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;
            justify-content: center
        }

        .flex > img {
            width: auto;
            height: auto;
        }
    </style>
</head>
<body>
    <div class="flex">
        <img style="width: 100%;" src="TimetablePhoto.png"></img>
        <img  src="TimetablePhotoMobile.png"></img>
    </div>
</body>
</html>
