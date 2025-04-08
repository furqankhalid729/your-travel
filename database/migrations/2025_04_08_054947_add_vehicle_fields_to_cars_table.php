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
        Schema::table('cars', function (Blueprint $table) {
            $table->string('vehicle_id')->nullable();
            $table->string('vehicle_type')->nullable();
            $table->string('vehicle_category')->nullable();
            $table->year('year_of_manufacture')->nullable();
            $table->string('color')->nullable();
            $table->string('chassis_number')->nullable();
            $table->decimal('price_per_km', 8, 2)->nullable();
            $table->string('owner')->nullable();
            $table->string('trunk_size')->nullable();
            $table->integer('mileage')->nullable();
            $table->boolean('allowed_for_rides')->default(false);
            $table->dateTime('last_use')->nullable();
            $table->string('note_fuel')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('cars', function (Blueprint $table) {
            $table->dropColumn([
                'vehicle_id',
                'vehicle_type',
                'vehicle_category',
                'year_of_manufacture',
                'color',
                'chassis_number',
                'price_per_km',
                'owner',
                'trunk_size',
                'mileage',
                'allowed_for_rides',
                'last_use',
                'note_fuel',
            ]);
        });
    }
};
