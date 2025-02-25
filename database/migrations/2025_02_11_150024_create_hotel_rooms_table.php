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
        Schema::create('hotel_rooms', function (Blueprint $table) {
            $table->id();
            $table->string("room_id");
            $table->string("room_type");
            $table->string("status");
            $table->integer("price");
            $table->integer("persons")->nullable();
            $table->unsignedBigInteger('hotel_id');
            $table->timestamps();

            $table->foreign('hotel_id')->references('id')->on('hotels')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hotel_rooms');
    }
};
