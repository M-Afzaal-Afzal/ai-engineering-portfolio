from app.core.settings import get_settings


def test_settings_reads_default_values():
    settings = get_settings()

    assert settings.app_name == "AI Engineering Portfolio API"
    assert settings.app_version == "0.1.0"
    assert settings.app_env in ["development", "test", "production"]
    assert settings.log_level in ["DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"]


def test_cors_origins_are_converted_to_list():
    settings = get_settings()

    assert "http://localhost:3000" in settings.cors_origin_list
    assert "http://127.0.0.1:3000" in settings.cors_origin_list
