<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\lifodb>
 */
class LifodbFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'      => $this->faker->name(),
            'age'       => $this->faker->numberBetween(18, 35),
            'key'       => $this->faker->unique()->randomNumber(4, true),
            'expire_at' => $this->faker->dateTime()
        ];
    }
}
