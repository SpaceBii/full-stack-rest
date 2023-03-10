# full-stack-rest
 
 Technologies required for this application:
  o XAMPP
  o Composer
  o Node.js
  
 Build on Laravel/React UI authentication consept.
 
 How to run after you clone repo:
  o Open terminal on the project folder or command cd to the folder.
   
  o Install the composer dependencies with " composer install " in the directory of the cloned APP.
     
     composer install
     
  o Install Laravel UI with " composer require laravel/ui " in cdm.
  
    composer require laravel/ui
    
  o Install React UI in Laravel with " php artisan ui react ".
  
    php artisan ui react
    
  o Then we install React Authentication in Laravel with " php artisan ui react --auth ".
  
    php artisan ui react --auth
    
  o We need to install NPM by " npm install " or yarn.
  
    npm install
    
  o Then it is time to make .env file by executing " cp .env.example .env ".
  
    cp .env.example .env
    
  o We need to generate a key that encrypts our Laravel application sources by " php artisan key:generate ".
  
    php artisan key:generate
  
  There it is good to check if everything is good for example check for vendor folder for laravel dependencies,
  and of course node_modules for react dependencies. We have to check env file if our data base is connected properly
  to our MySQL DB.
    
   Keep in mind that you have to keep your XAMPP running.
  o If everything is good we migrate our tables next with " php artisan migrate ".
  
    php artisan migrate
   
  o After that we have to run our seeders by runnig " php artisan migrate --seed ".
  
    php artisan migrate --seed
  
  Then we are ready to start everything: first open one terminal in APP folder then we have to run 
  " php artisan serve ", then we open different  terminal to the same folder of the APP but we execute 
  " npm run dev ". If everything is working properly you can open browser " http://127.0.0.1:8000/ " in this local 
  server. Then you have to make a registration. You dont need actual working E-mail the verification is not turned on. 
  
    php artisan serve
    npm run dev
  
  If there is problem you can run it with --forse at the end of the command or you can visit " https://devmarketer.io/learn/setup-laravel-project-cloned-github-com/ " 
  for installing Laravel and " https://medium.com/@laraveltuts/install-reactjs-in-laravel-9-tutorial-d2fe57d41c15 " for how to install React UI,
  on fresh Laravel App.
  
  Or of course you can contact me on " borotoro@abv.bg " or discord " Broto#6883 " .










laravel-back-end-api-consumed-react-front-end
