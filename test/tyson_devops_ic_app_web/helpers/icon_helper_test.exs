defmodule TysonDevopsIcAppWeb.IconHelperTest do
  use TysonDevopsIcAppWeb.ConnCase, async: true

  import Phoenix.HTML, only: [safe_to_string: 1]

  alias TysonDevopsIcAppWeb.IconHelper

  describe "icon_tag/3" do
    test "renders a svg icon" do
      first_svg_icon =
        TysonDevopsIcAppWeb.Endpoint
        |> IconHelper.icon_tag("active", class: "customize-icon-class")
        |> safe_to_string()

      second_svg_icon =
        TysonDevopsIcAppWeb.Endpoint
        |> IconHelper.icon_tag("icon-lock")
        |> safe_to_string()

      assert first_svg_icon ==
               "<svg class=\"icon customize-icon-class\"><use xlink:href=\"/images/icon-sprite.svg#icon-priv--static--images--icons--active\"></svg>"

      assert second_svg_icon ==
               "<svg class=\"icon \"><use xlink:href=\"/images/icon-sprite.svg#icon-priv--static--images--icons--icon-lock\"></svg>"
    end
  end
end
