<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {


        // Create Tours Table
        Schema::create('tours', function (Blueprint $table) {
            $table->id();
            $table->string('tour_name');
            $table->text('description');
            $table->float('price');
            $table->string('location');
            $table->integer('duration');
            $table->string('food');
            $table->enum('tour_type', ['Adventure', 'Cultural', 'Relaxation', 'Other']);
            $table->enum('tour_journy_style', ['Group', 'Private', 'Other']);
            $table->json('facilities');
            $table->date('start_date');
            $table->date('end_date');
            $table->integer('persons');
            $table->integer('adult');
            $table->integer('child');
            $table->text('tour_itinerary');
            $table->timestamps();
        });

        // Create Hotel Table
        Schema::create('hotels', function (Blueprint $table) {
            $table->id();
            $table->string('hotel_name');
            $table->string('location');
            $table->text('description');
            $table->string('destination');
            $table->string('parking');
            $table->integer('days');
            $table->text('services');
            $table->timestamps();
        });

        // Create Room Table
        Schema::create('rooms', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hotel_id')->constrained('hotels');
            $table->string('room_type');
            $table->json('facilities');
            $table->dateTime('availability');
            $table->float('room_price');
            $table->integer('adult');
            $table->integer('children');
            $table->timestamps();
        });

        // Create Cars Table
        // Schema::create('cars', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('car_name');
        //     $table->enum('car_type', ['Sedan', 'SUV', 'Van', 'Other']);
        //     $table->enum('category', ['Economy', 'Luxury', 'Standard']);
        //     $table->text('features');
        //     $table->float('price');
        //     $table->integer('gst_tax');
        //     $table->integer('passengers');
        //     $table->timestamps();
        // });

        // Schema::create('cars', function (Blueprint $table) {
        //     $table->id();
        //     $table->foreignId('model_id')->constrained()->onDelete('cascade');
        //     $table->foreignId('fuel_id')->constrained()->onDelete('cascade');
        //     $table->foreignId('transmission_id')->constrained()->onDelete('cascade');
        //     $table->enum('car_type', ['Sedan', 'SUV', 'Van', 'Other']);
        //     $table->enum('category', ['Economy', 'Luxury', 'Standard']);
        //     $table->string('image');
        //     $table->integer('capacity');
        //     $table->enum('status', ['available', 'not_available'])->default('available');
        //     $table->string('car_no');
        //     $table->decimal('price_per_day', 8, 2);
        //     $table->json('features')->nullable();
        //     $table->timestamps();
        // });

        Schema::create('cars', function (Blueprint $table) {
            $table->id();
              $table->foreignId('model_id')->constrained('car_models')->onDelete('cascade');
              $table->foreignId('fuel_id')->constrained('car_fuels')->onDelete('cascade');
              $table->foreignId('transmission_id')->constrained('car_transmissions')->onDelete('cascade');
              $table->enum('car_type', ['Sedan', 'SUV', 'Van', 'Other']);
              $table->enum('category', ['Economy', 'Luxury', 'Standard']);
              $table->string('image');
              $table->integer('capacity');
              $table->enum('status', ['available', 'not_available'])->default('available');
              $table->string('car_no');
              $table->decimal('price_per_day', 8, 2);
              $table->json('features')->nullable();
              $table->timestamps();
      });
        // Create Driver Table
        Schema::create('drivers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('car_id')->constrained('cars');
            $table->string('driver_name');
            $table->bigInteger('phone_no');
            $table->timestamps();
        });

        // Create Booking Table
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('tour_id')->nullable()->constrained('tours');
            $table->foreignId('hotel_id')->nullable()->constrained('hotels');
            $table->foreignId('car_id')->nullable()->constrained('cars');
            $table->json('tour_data',)->nullable();
            $table->json('ride_data')->nullable();
            $table->json('hotel_data')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
        Schema::dropIfExists('drivers');
        Schema::dropIfExists('cars');
        Schema::dropIfExists('rooms');
        Schema::dropIfExists('hotels');
        Schema::dropIfExists('tours');
        Schema::dropIfExists('users');
    }
};
