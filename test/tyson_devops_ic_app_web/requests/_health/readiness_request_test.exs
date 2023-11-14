defmodule TysonDevopsIcAppWeb.ReadinessRequestTest do
  use TysonDevopsIcAppWeb.ConnCase, async: true

  test "returns 200", %{conn: conn} do
    conn =
      get(
        conn,
        "#{Application.get_env(:tyson_devops_ic_app, TysonDevopsIcAppWeb.Endpoint)[:health_path]}/readiness"
      )

    assert response(conn, :ok) =~ "ready"
  end
end
