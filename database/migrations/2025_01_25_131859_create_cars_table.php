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
            $table->string('tags');
            $table->json('features')->nullable();
            $table->json('car_images')->nullable();
            $table->timestamps();
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
