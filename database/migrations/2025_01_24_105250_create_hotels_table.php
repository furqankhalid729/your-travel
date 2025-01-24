<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('hotel_bookings', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email');
            $table->boolean('email_verified')->default(false);
            $table->string('phone_no');
            $table->boolean('phone_no_verified')->default(false);
            $table->string('identity_no');
            $table->enum('gender', ['Male', 'Female', 'Other']);
            $table->dateTime('from_date');
            $table->dateTime('to_date');
            $table->string('duration');
            $table->string('tour_location');
            $table->integer('no_of_member');
            $table->decimal('price', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hotels');
    }
};
