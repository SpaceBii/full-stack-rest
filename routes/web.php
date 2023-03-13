<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StackController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::post('/push/new', 
        [StackController::class, 'store']);

Route::get('/get/last', 
        [StackController::class, 'getTopObj']);

//         // This is LifoDB routes 
Route::get('/get/lifo/list',
        [LifodbController::class, 'index']);

// Route::post('/add/new/name', 
//         [LifodbController::class, 'store']);

