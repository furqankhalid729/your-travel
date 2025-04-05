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
        Schema::table('tours', function (Blueprint $table) {
            $table->integer('slots')->nullable();
            $table->text('keywords')->nullable();
            $table->string('transport_time')->nullable();
            $table->string('transport_provider')->nullable();
            $table->string('start_location')->nullable();
            $table->string('end_location')->nullable();
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->string('estimated_time')->nullable();
            
            $table->integer('adults')->nullable();
            $table->decimal('adult_cost', 10, 2)->nullable();
            $table->decimal('adult_margin', 10, 2)->nullable();
            $table->decimal('adult_total_price', 10, 2)->nullable();

            $table->integer('children')->nullable();
            $table->decimal('child_cost', 10, 2)->nullable();
            $table->decimal('child_margin', 10, 2)->nullable();
            $table->decimal('child_total_price', 10, 2)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tours', function (Blueprint $table) {
            $table->dropColumn([
                'slots',
                'keywords',
                'transport_time',
                'transport_provider',
                'start_location',
                'end_location',
                'start_date',
                'end_date',
                'estimated_time',
                'adults',
                'adult_cost',
                'adult_margin',
                'adult_total_price',
                'children',
                'child_cost',
                'child_margin',
                'child_total_price',
            ]);
        });
    }
};
