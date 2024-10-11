<?php

use Illuminate\Support\Facades\Route;
use App\Meta;
use Inertia\Inertia;

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

Route::get('/registrasi', function () {
    Meta::addMeta('title', 'membership saloka');
    Meta::addMeta('description', 'membership saloka');
    Meta::addMeta('keyword', 'saloka theme park, saloka, theme park, tiket, membership, membership saloka');
    return Inertia::render('Auth/Registrasi');
})->name('registrasi');

Route::get('/', function () {
    Meta::addMeta('title', 'membership saloka');
    Meta::addMeta('description', 'membership saloka');
    Meta::addMeta('keyword', 'saloka theme park, saloka, theme park, tiket, membership, membership saloka');
    return Inertia::render('Auth/Login');
})->name('login');

Route::get('/lupa-password', function () {
    return Inertia::render('Auth/ForgetPassword');
})->name('lupaPassword');

Route::get('/home', function () {
    return Inertia::render('Dashboard/Home');
})->name('homeDashboard');

Route::get('/registrasi-membership', function () {
    return Inertia::render('RegMembership/RegMembership');
})->name('registrasiMembership');

Route::get('/membership', function () {
    return Inertia::render('Membership/Membership');
})->name('membership');

Route::get('/benefit-membership', function () {
    return Inertia::render('BenefitMembership/BenefitMembership');
})->name('benefitMembership');
