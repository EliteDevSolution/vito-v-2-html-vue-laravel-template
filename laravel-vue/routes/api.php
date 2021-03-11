<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Auth::routes();

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
    Route::post('login', 'Auth\JwtController@login');
    Route::post('logout', 'Auth\JwtController@logout');
    Route::post('register', 'Auth\JwtController@register');
    Route::post('refresh', 'Auth\JwtController@refresh');
    Route::post('me', 'Auth\JwtController@me');
});

Route::post('login','Auth\PassportController@login');
Route::post('register', 'Auth\JwtController@register');
