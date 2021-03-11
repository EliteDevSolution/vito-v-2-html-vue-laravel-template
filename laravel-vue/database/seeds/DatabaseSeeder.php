<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        \App\User::create([
            'name' => 'admin',
            'email' => 'admin@vito.com',
            'password' => \Illuminate\Support\Facades\Hash::make('admin123')
        ]);
    }
}
