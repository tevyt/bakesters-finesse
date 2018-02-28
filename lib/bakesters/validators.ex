defmodule Bakesters.Validators do
  @moduledoc """
  Custom validators for Ecto Changeset
  """

  def validate_phone_number(changest, field, options \\ []) do
    Ecto.Changeset.validate_change(changest, field, fn _, phone_number ->
      contains_only_valid_characters = phone_number =~ ~r/^[\+\(\)\-\s\d]*$/

      number_of_digits =
        Regex.replace(~r/[^\d]/, phone_number, "")
        |> String.length()

      case contains_only_valid_characters and number_of_digits <= 15 do
        true -> []
        false -> [{field, options[:message] || "Invalid phone number"}]
      end
    end)
  end
end
