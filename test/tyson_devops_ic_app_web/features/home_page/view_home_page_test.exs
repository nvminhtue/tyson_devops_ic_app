defmodule TysonDevopsIcAppWeb.HomePage.ViewHomePageTest do
  use TysonDevopsIcAppWeb.FeatureCase, async: false

  feature "view home page", %{session: session} do
    visit(session, Routes.page_path(TysonDevopsIcAppWeb.Endpoint, :index))

    assert_has(session, Query.text("Welcome to Phoenix!"))
  end
end
