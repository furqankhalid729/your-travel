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
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('car_name');
            $table->string('brand');
            $table->string('model');
            $table->string('fuel');
            $table->string('car_number');
            $table->string('transmission');
            $table->integer('capacity');
            $table->string('status')->default('available');
            $table->decimal('price', 8, 2);
            $table->json('features')->nullable();
            $table->json('car_images')->nullable();
            $table->timestamps();
            // $table->id();
            // $table->foreignId('model_id')->constrained('car_models')->onDelete('cascade');
            // $table->foreignId('fuel_id')->constrained('car_fuels')->onDelete('cascade');
            // $table->foreignId('transmission_id')->constrained('car_transmissions')->onDelete('cascade');
            // $table->enum('car_type', ['Sedan', 'SUV', 'Van', 'Other']);
            // $table->enum('category', ['Economy', 'Luxury', 'Standard']);
            // $table->string('image');
            // $table->integer('capacity');
            // $table->enum('status', ['available', 'not_available'])->default('available');
            // $table->string('car_no');
            // $table->decimal('price_per_day', 8, 2);
            // $table->json('features')->nullable();
            // $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};
