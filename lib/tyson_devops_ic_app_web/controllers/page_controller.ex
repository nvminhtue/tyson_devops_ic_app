# credo:disable-for-this-file CompassCredoPlugin.Check.DoSingleExpression
defmodule TysonDevopsIcAppWeb.PageController do
  use TysonDevopsIcAppWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
