import React, { useCallback, useState } from 'react';
import Layout from '@theme/Layout';
import { encodeQueryData } from '../util';
import { Card, CardContent, CardHeader, CardTitle } from '../components/card';
import { PrimaryButton } from '../components/button-primary';
import { Input } from '../components/input';
import { Label } from '../components/label';
import { Checkbox } from '../components/checkbox';

declare const anPlayer: {
  getConfiguration(): string;
  setConfiguration(configuration: string): boolean;
  finish(): void;
};

// Type Definitions
interface TmdbConfig {
  readonly excludeKeywords?: string[];
  readonly includePeopleOnFeed: boolean;
  readonly includeTvShowsOnFeed: boolean;
}

// Reusable Components Interfaces

// Configuration Loader
const loadConfiguration: TmdbConfig = (() => {
  try {
    return JSON.parse(anPlayer.getConfiguration()) as TmdbConfig;
  } catch (e) {
    console.error(e);
    return {
      excludeKeywords: [],
      includePeopleOnFeed: true,
      includeTvShowsOnFeed: true,
    };
  }
})();

// Main Component
const Tmdb: React.FC = () => {
  const [excludeKeywords, setExcludeKeywords] = useState<string>(
    loadConfiguration.excludeKeywords?.join(',') ?? '',
  );

  const [selectedFeeds, setSelectedFeeds] = useState<{
    tvShows: boolean;
    people: boolean;
  }>({
    tvShows: loadConfiguration.includeTvShowsOnFeed,
    people: loadConfiguration.includePeopleOnFeed,
  });

  const createConfig = useCallback(
    (): TmdbConfig => ({
      excludeKeywords: excludeKeywords ? excludeKeywords.split(',') : undefined,
      includePeopleOnFeed: selectedFeeds.people,
      includeTvShowsOnFeed: selectedFeeds.tvShows,
    }),
    [excludeKeywords, selectedFeeds],
  );

  const handleOnSave = useCallback(() => {
    const config = createConfig();
    saveConfiguration(config);
  }, [createConfig]);

  const handleOnInstall = useCallback(() => {
    const config = createConfig();
    const downloadUrl =
      'https://raw.githubusercontent.com/xeinebiu/anplayer_app/main/plugins/tmdb.json';
    const queryData = encodeQueryData({
      config: JSON.stringify(config),
      downloadUrl,
    });
    window.open(`anplayer://plugin/install?${queryData}`, '_blank');
  }, [createConfig]);

  const isLoadedFromAnPlayer = (() => {
    try {
      return !!anPlayer;
    } catch {
      return false;
    }
  })();

  return (
    <Layout title="TMDb" description="TMDB Configuration Page">
      <div className="tmdb-container">
        <div className="tmdb-main">
          <Card>
            <CardHeader>
              <CardTitle>Exclusion Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                placeholder="480p, BRrip, ..."
                value={excludeKeywords}
                onChange={(e) => setExcludeKeywords(e.target.value)}
              />
              <Label muted>
                Filter out contents containing any of these keywords
                (comma-separated)
              </Label>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="checkbox-container">
                <Checkbox
                  id="tv_shows"
                  checked={selectedFeeds.tvShows}
                  onChange={(checked) =>
                    setSelectedFeeds((prev) => ({ ...prev, tvShows: checked }))
                  }
                />
                <Label htmlFor="tv_shows">TV Shows</Label>
              </div>

              <div className="checkbox-container">
                <Checkbox
                  id="people"
                  checked={selectedFeeds.people}
                  onChange={(checked) =>
                    setSelectedFeeds((prev) => ({ ...prev, people: checked }))
                  }
                />
                <Label htmlFor="people">People</Label>
              </div>

              <Label muted>
                Select content types to include in your personalized feeds
              </Label>
            </CardContent>
          </Card>

          <div className="buttons-container">
            {isLoadedFromAnPlayer ? (
              <PrimaryButton onClick={handleOnSave}>Save</PrimaryButton>
            ) : (
              <PrimaryButton onClick={handleOnInstall}>Install</PrimaryButton>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Configuration Saver
const saveConfiguration = (configuration: TmdbConfig) => {
  const configurationJson = JSON.stringify(configuration);
  const result = anPlayer.setConfiguration(configurationJson);
  if (result) {
    anPlayer.finish();
  }
};

export default Tmdb;
